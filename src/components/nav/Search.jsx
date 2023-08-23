export default function SearchBar(){
    return(
        <div className="row d-md-block d-none">
            <div className="input-group mb-3 ">
                <input type="text" id="search_bar" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" >🔎</button>
            </div>
        </div>
    )
}