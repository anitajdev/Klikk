import Image from "next/image"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image 
                    src="https://images.pexels.com/photos/26611646/pexels-photo-26611646/free-photo-of-a-small-wooden-stool-with-a-cup-on-it.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
                    alt="" 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">Maria Chase</span>
            </div>
            <Image 
                src="/more.png" 
                alt="" 
                width={16} 
                height={16} 
            />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image 
                    src="https://images.pexels.com/photos/25853720/pexels-photo-25853720/free-photo-of-aerial-view-of-waves-brushing-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
                    alt=""
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolore possimus dolores aut, provident eligendi, exercitationem quasi consectetur cumque assumenda at explicabo iure ipsam adipisci laudantium neque, quia debitis accusamus!</p>
        </div>
        {/* INTERACTION */}
        <div className="flex items-center justify-between text-sm mt-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png" 
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png" 
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Comments</span></span>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/share.png" 
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Shares</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post