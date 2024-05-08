const Welcome = () => {
  return (
    <div className="flex justify-start mt-5" style={style.wrapper}>
      <h1 className="typing-demo" style={style.typingDemo}>Design. Build. Scale.</h1>
      <style>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
          }
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}
      </style>
    </div>
  );
};

const style = {
  wrapper: {
    display: "grid",
    placeItems: "center"
  },
  typingDemo: {
    width: "22ch",
    animation: "typing 6s steps(22), blink .6s step-end infinite alternate",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "1px solid",
    fontFamily: "monospace",
    fontSize: "3em"
  }
};

export default Welcome;
