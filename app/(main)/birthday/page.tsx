'use client';

import React, { useState } from 'react';

const Birthday = () => {
  const [gregorianDate, setGregorianDate] = useState('');
  const [hijriDate, setHijriDate] = useState<string | null>(null);
  const [nextGregorianDate, setNextGregorianDate] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertToHijri = async () => {
    if (!gregorianDate) return;

    const formattedDate = new Date(gregorianDate)
      .toLocaleDateString('en-GB')
      .split('/')
      .join('-');

    try {
      // Step 1: Gregorian → Hijri
      const res = await fetch(`https://api.aladhan.com/v1/gToH?date=${formattedDate}`);
      const data = await res.json();

      if (data.code !== 200) throw new Error(`gToH failed: ${data.status}`);

      const hijri = data.data.hijri;
      setHijriDate(`${hijri.day} ${hijri.month.en} ${hijri.year} (Hijri)`);

      // Step 2: Get today's Hijri year
      const todayHijriRes = await fetch(
        'https://api.aladhan.com/v1/gToH?date=' +
          new Date().toLocaleDateString('en-GB').split('/').join('-')
      );
      const todayHijriData = await todayHijriRes.json();
      const currentHijriYear = parseInt(todayHijriData.data.hijri.year, 10);

      // Step 3: Convert Hijri → Gregorian
      const getGregorianFromHijri = async (yearToTry: number) => {
        const res = await fetch(
          `https://api.aladhan.com/v1/hToG?date=${hijri.day}-${hijri.month.number}-${yearToTry}`
        );
        const data = await res.json();
        if (data.code !== 200) throw new Error(`hToG failed for year ${yearToTry}: ${data.status}`);

        const g = data.data.gregorian;
        const gDate = new Date(
          `${g.year}-${String(g.month.number).padStart(2, '0')}-${String(g.day).padStart(2, '0')}T00:00:00Z`
        );
        return { ...g, fullDate: gDate };
      };

      // Step 4: Look up to 3 Hijri years, return first that lands in the current or next Gregorian year
      const currentGregorianYear = new Date().getFullYear();
      const yearStart = new Date(currentGregorianYear, 0, 1); // Jan 1 of current year
      let gregorian: any = null;

      for (let offset = 0; offset <= 2; offset++) {
        try {
          const candidate = await getGregorianFromHijri(currentHijriYear + offset);
          if (candidate.fullDate >= yearStart) {
            gregorian = candidate;
            break;
          }
        } catch (e) {
          console.error(`Error checking year ${currentHijriYear + offset}`, e);
        }
      }

      if (!gregorian) throw new Error('Could not find a valid upcoming Gregorian date');

      // Step 5: Format weekday
      const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone: 'UTC',
      });
      const weekday = formatter.format(gregorian.fullDate);

      setNextGregorianDate(`${weekday}, ${gregorian.day} ${gregorian.month.en} ${gregorian.year}`);
      setError(null);
    } catch (err: any) {
      console.error('Conversion error:', err.message);
      setHijriDate(null);
      setNextGregorianDate(null);
      setError('Conversion failed. Please check your date or try another.');
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold">Find Your Islamic Birthday</h1>
      <input
        type="date"
        value={gregorianDate}
        onChange={(e) => setGregorianDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={convertToHijri}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Convert to Hijri
      </button>

      {hijriDate && (
        <div className="mt-6 text-xl space-y-2">
          <div>
            <strong>Your Islamic Birthday:</strong>
            <p>{hijriDate}</p>
          </div>
          {nextGregorianDate && (
            <div>
              <strong>It will fall on:</strong>
              <p>{nextGregorianDate}</p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mt-6 text-red-600 font-semibold">
          {error}
        </div>
      )}
    </div>
  );
};

export default Birthday;
