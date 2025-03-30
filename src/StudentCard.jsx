function StudentCard({ photo1, photo2, reg_no, name, time1, time2 }) {
  return (
    <div className="bg-[#c4c4c4a4] h-40 w-72 rounded-md flex flex-col items-center p-2 shadow-md">
      <h1 className="text-lg font-semibold">{reg_no}</h1>
      <p className="text-sm text-gray-700">{name}</p>
      {/* Image section */}
      <div className="flex gap-8 mt-2">
        <div className="flex flex-col items-center">
          <img className="h-20 w-20 rounded-md" src={photo1} alt={`${name} photo 1`} />
          <p className="text-xs text-gray-600">{time1}</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-20 w-20 rounded-md" src={photo2} alt={`${name} photo 2`} />
          <p className="text-xs text-gray-600">{time2}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
