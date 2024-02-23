import { Banner, Register } from "@/components";
import { UserList } from "@/components";

export default function Home() {
    return (
        <div>
            <Banner />
            <div className="px-72">
                <UserList />
                <Register />
            </div>
        </div>
    );
}
