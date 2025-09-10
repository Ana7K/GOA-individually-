import { useState } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onApply: (note: string) => void;
}

export default function Dialog({ open, onClose, onApply }: DialogProps) {
  const [note, setNote] = useState("");

  if (!open) return null;

  const handleApply = () => {
    onApply(note);
    setNote("");
    onClose();
  };

  const handleCancel = () => {
    setNote("");
    onClose();
  };

  return (
    <div
      onClick={handleCancel}
      className="fixed inset-0 flex justify-center items-center bg-[#252525]/40 dark:bg-[#252525]/60"
    >
      <div
        className="w-[500px] h-[289px] bg-white dark:bg-[#252525] p-6 rounded-2xl dark:border dark:border-white flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 className="text-center text-lg font-semibold text-[#252525] dark:text-white mb-4">
            NEW NOTE
          </h2>
          <input
            type="text"
            placeholder="Input your note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-3 py-2 border border-[#6C63FF] rounded-md mb-6 dark:text-white"
          />
        </div>
        <div className="flex justify-between ">
          <button
            onClick={handleCancel}
            className="px-4 py-2 w-[110px] border border-[#6C63FF] text-[#6C63FF] rounded-md hover:bg-[#ebeaf7] dark:hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer"
          >
            CANCEL
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 w-[110px] bg-[#6C63FF] hover:bg-[#534CC2] transition-colors duration-300 text-white rounded-md cursor-pointer"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
