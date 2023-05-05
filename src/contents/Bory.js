import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Bory() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <SideBar />
        </div>
    );
}