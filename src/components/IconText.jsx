const IconText = ({ icon, text, isActive }) => {
  return (
    <>
      <div className="flex flex-column mr-2">
        <i
          className={`pi pi-fw ${icon}`}
          style={{
            fontSize: "1.3rem",
            color: isActive ? "#551FFF" : "inherit",
          }}
        />
      </div>
      <div className="flex flex-column ml-2">
        <span
          className="p-ml-2"
          style={{
            fontSize: "1.2rem",
            color: isActive ? "#551FFF" : "inherit",
          }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default IconText;
