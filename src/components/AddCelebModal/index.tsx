import React from "react";
import { CelebrityTypes } from "../../types";
import { Modal, Segment } from "semantic-ui-react";
import AddCelebForm from "./AddCelebForm";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: CelebrityTypes) => void;
  error?: string;
}

const AddCelebModal = ({ modalOpen, onClose, onSubmit, error }: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddCelebForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal.Content>
  </Modal>
);

export default AddCelebModal;
