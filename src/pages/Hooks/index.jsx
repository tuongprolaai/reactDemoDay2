import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Modal from "../../components/Modal";

const ChildComponent = forwardRef((props, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      increase() {
        setCounter(counter + 1);
      },
    };
  }, [counter]);

  const handleCounterChange = () => {
    setCounter(counter + 1);
  };

  return <button onClick={handleCounterChange}>Counter is {counter}</button>;
});

function Hooks() {
  const childRef = useRef(null);
  const modalRef = useRef(null);

    const handleRef = (modal)=>{
        console.loh(modal);
        if(modal) modal.open();
    }

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => childRef.current.increase()}>Increase</button>
      <Modal ref={handleRef}><h1>Modal Content</h1>
        <button conLick={()=>modalRef.current.close()}>Close modal</button>
      </Modal>
      <button onClick={()=>modalRef.current.open()}>Open modal</button>
    </div>
  );
}

export default Hooks;
