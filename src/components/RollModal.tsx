type RollModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function RollModal({ children, onClose }: RollModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-window"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
