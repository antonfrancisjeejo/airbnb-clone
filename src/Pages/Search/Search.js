import React from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import SearchResult from "../../components/SearchResult/SearchResult";

const Search = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 August to 30 August • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/Screen%20Shot%202020-03-26%20at%202.57.55%20PM.png"
        location="Private Rooms in Bangalore"
        title="Stay at this spacious Golorian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.73}
        price="$20 / night"
        total="$130 total"
      />
      <SearchResult
        img="https://consumerist.com/consumermediallc.files.wordpress.com/2015/04/hotel.png%3Fw=1060"
        location="Private Rooms in Los Altos"
        title="Rent this Spacious Apartment"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={3.93}
        price="$10 / night"
        total="$110 total"
      />
      <SearchResult
        img="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Rooms in Himalayas"
        title="Stay at this Mount Top Room"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.42}
        price="$30 / night"
        total="$170 total"
      />
      <SearchResult
        img="https://skift.com/wp-content/uploads/2019/10/Airbnb-Plus-Cape-Town-South-Africa-e1570480545388.jpg"
        location="Private Rooms in Hyderabad"
        title="Grounded Farm house with swimming pool"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.33}
        price="$70 / night"
        total="$430 total"
      />
    </div>
  );
};

export default Search;
