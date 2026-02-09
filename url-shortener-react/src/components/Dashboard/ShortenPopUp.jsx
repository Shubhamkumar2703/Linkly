import { Modal } from "@mui/material";    
import CreateNewShorten from "./CreateNewShorten";

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-short-link-modal"
      aria-describedby="create-short-link-description"
    >
      <div className="flex items-center justify-center h-full w-full outline-none">
        <CreateNewShorten setOpen={setOpen} refetch={refetch} />
      </div>
    </Modal>
  );
};

export default ShortenPopUp;
