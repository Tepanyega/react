import List from "./components/List";

function App(){

  return(
    <div>
    <div className="heading">
      <h1>My Project List</h1>

    </div>
     
     <div className="cards">

<h3>
  

     
   <List text="Learning javascript" purpose="understanding core" />



  

</h3> 
<h3><List text=" learning react " purpose="testing"/></h3>
<h3><List text=" learning HTML " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>
<h3><List text=" learning react " purpose="Testing"/></h3>

     </div>




    </div>
  );
}

export default App;