import { getIsAdmin,  } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"));

const AdminPage = async () => {
    const isAdmin = await getIsAdmin();

    if (!isAdmin) {
        redirect("/");
    }

    return (
        <App />
    );
};

export default AdminPage; 