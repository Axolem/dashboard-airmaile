const DataField = ({ label, value, color, icon, bg }) => {
  return (
    <div className="flex flex-row justify-content-center align-items-center border-round">
      <i
        className={`pi pi-${icon} p-2`}
        style={{
          color,
          borderRadius: 10,
          fontSize: "1.3rem",
          backgroundColor: bg,
        }}
      />
      <div className="flex flex-column justify-content-center align-items-center ml-1">
        <p className="m-0 text-gray-400 text-xs">{label}</p>
        <h4 className="m-0 text-gray-800">{value}</h4>
      </div>
    </div>
  );
};

export default DataField;
