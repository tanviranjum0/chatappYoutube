import { useChatStore } from "../store/useChatStore";
function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs  bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab  ${activeTab === "chats" ? "bg-cyan-500/20  border border-green-300/20 rounded-xl shadow-xl text-white" : "text-slate-400"
          }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab ${activeTab === "contacts" ? "bg-cyan-500/20  border border-green-300/20 rounded-xl shadow-xl text-white" : "text-slate-400"
          }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
