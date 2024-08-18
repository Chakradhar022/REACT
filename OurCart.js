const OurCart=({items, i})=>{
    const {name, description, id}=items.card.info;
    // const {index}=i;
    return (
        <div className=" p-3 m-3 w-4/12 border-2 border-black">
            <h2>Item-{i+1}</h2>
            <h2>Id:{id}</h2>
            <h2 className="font-bold">Item Name:{name}</h2>
            <h2>About Item:{description}</h2>

        </div>
    )
}
export default OurCart;