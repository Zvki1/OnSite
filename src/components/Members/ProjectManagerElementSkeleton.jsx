

const ProjectManagerElementSkeleton = () => {
  return (
    <div className="min-w-60 p-4 border-2 border-gray-200 rounded-md space-y-4 animate-pulse">
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
    </div>
  
    <div className="flex flex-row justify-between">
      <div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
  )
}

export default ProjectManagerElementSkeleton