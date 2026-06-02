
export default function Button({title ,onPress}){
    return(
        <button className="h-20 w-40 md:h-24 md:w-48 lg:h-25 lg:w-50 bg-blue-950 hover:bg-blue-900 rounded-md shadow-2xl transition-colors duration-200 text-center"> 
            <p className="text-lg md:text-2xl lg:text-4xl text-white font-semibold">{title}{onPress}</p>
        </button>
    )
}