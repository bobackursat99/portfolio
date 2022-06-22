import { Carousel } from 'react-carousel-minimal';
import './App.css'

function App() {



 const data = [
    {
      image: "https://fatihbasol.com/wp-content/uploads/2021/09/oop.png",
      caption: "Object Oriented Programming"
    },
    {
      image: "https://www.techyloud.com/wp-content/uploads/2022/02/Data-Structure-assignement.jpg",
      caption: "Data Structers"
    },
    {
      image: "https://www.techidence.com/wp-content/uploads/2020/05/Algorithm.jpg",
      caption: "Algorithms"
    }, 
    {
      image: "https://www.blog.omertex.com/wp-content/uploads/2019/11/UI-design-15_optimized.png",
      caption: "Front-end Development"
    }, 
    {
      image: "https://www.lifewire.com/thmb/kl3swkmAw2qcYBkxsOs9jIKsoFk=/3644x2733/filters:fill(auto,1)/database-157334670-5c29939d46e0fb0001edf766.jpg",
      caption: "Database Systems"
    }, 
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">

       <h2 className='interest'>Area of Interest</h2>

      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
           
            thumbnailWidth="100px"
            style={{
              
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
             
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;