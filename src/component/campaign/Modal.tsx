
import { useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void; // Function to close the modal
}
// Navigate to ActiveCampaign page

const Modal: React.FC<ModalProps> = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleContinue = () => {
    navigate("/activecampaign"); // Navigate to ActiveCampaign page
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-[20px] p-6 w-[500px]   text-center flex flex-col justify-center">
        <h2 className="text-black text-[30px]">
          <strong>Congratulations Campaign Created</strong>
        </h2>
        <p className="text-black text-[18px] mb-6">
          Thank you for creating your campaign. We are excited to inform you
          that your campaign has been successfully created and is currently
          pending approval from our DAO members.
        </p>
        <button
          className="w-full bg-black text-white py-2 rounded-[10px]"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;
