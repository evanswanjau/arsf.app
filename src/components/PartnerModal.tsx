import React from "react";

interface PartnerModalProps {
  open: boolean;
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div className="w-full max-w-lg rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h3
            id="partner-modal-title"
            className="text-lg font-semibold text-gray-900"
          >
            Become a Partner
          </h3>
          <button
            onClick={onClose}
            className="h-9 w-9 cursor-pointer rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="px-6 py-5">
          <p className="text-sm text-gray-600 mb-4">
            Share a few details and we’ll reach out with next steps.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Organization / Name"
              required
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Email"
                type="email"
                required
              />
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Phone"
                type="tel"
              />
            </div>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300">
              <option>Partnership type</option>
              <option>Research collaboration</option>
              <option>Community training</option>
              <option>Conservation project</option>
              <option>Supply / distribution</option>
            </select>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              rows={4}
              placeholder="How would you like to collaborate?"
            />
            <button className="w-full cursor-pointer border border-[#02463D] bg-[#02463D] hover:bg-white hover:text-[#02463D] text-white py-3 rounded-lg font-semibold">
              Send interest
            </button>
            <p className="text-xs text-gray-500 text-center">
              We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
