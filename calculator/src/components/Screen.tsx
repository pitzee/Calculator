interface Props {
  numbers: number[];
}

const Screen = ({ numbers }: Props) => {
  return (
    <div className="card">
      <div className="card-body">{numbers}</div>
    </div>
  );
};

export default Screen;
