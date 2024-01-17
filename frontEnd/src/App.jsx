import React, { useEffect, useState } from 'react'



export default function App() {
  const [cricket, setCricket] = React.useState(null);
  const [data,setData] = useState([])
  useEffect(() => {
    // Uncomment the first fetch call
    fetch("http://localhost:8081/info")
      .then((res) => res.json())
      .then((data) => {
        // Set the data state
        setData(data);
        // Log the value of matchApi property
        console.log(data[0].matchApi);
        // Assign the value of matchApi to a variable key
        var key = data[0].matchApi;
        
          setInterval(() => {
          
         fetchData(key);
         }, 1000);
      })
      .catch((err) => console.log(err));
  
    async function fetchData(key) {
      // Use the key as a parameter
      const options = {
        method: "GET",
      };
  
      try {
        const response = await fetch(key, options);
        const final = await response.json();
        console.log(final);
        setCricket(final);
        console.log(cricket);
    
      } catch (error) {
        // console.error(error);
      }
    }
  
   }, []);
  



  return (
    <>
    <div>
      <br></br>
      {cricket && (

        
        <div className="container">
          <div className="card">
             <div className="card-body">

                <div style={{display:"flex",justifyContent:"center",float:"left"}}>
                  <p style={{fontSize:"14px"}}>Home Team :</p>
                  </div> 
                  <br></br><br></br>
                 
                <div style={{display:"flex",justifyContent:"center"}}>
                    
                    <div style={{display:"flex",flexDirection:"row",columnGap:"50px"}}>
                        
                        <div style={{display:"flex",flexDirection:"column"}}>
                            
                            <div style={{lineHeight:"100%"}}>
                             <p style={{textAlign:"center"}}><img width="45px" height="35px" style={{}} src="https://imgs.search.brave.com/4QNLnyGpJQvd8WKLs7YvaapdmmYUsV8f2yW6bwShLaY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80MS9GbGFnX29m/X0luZGlhLnN2Zy81/MTJweC1GbGFnX29m/X0luZGlhLnN2Zy5w/bmc" title="India" class="cb-img-rad-0"/><br></br>
                             <p style={{textAlign:"center",fontSize:"13px",lineHeight:"200%"}}>{cricket.result.scorecard.homeTeam.name}</p></p>
                            </div>
                            <div>
                              
                            </div>

                        </div>

                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"20px"}}>
                           
                           <div style={{display:"inline-block",textAlign:"center",lineHeight:""}}>
                              {/* <p><h2>{cricket.result.scorecard.awayTeam.batsmens.total.score}/{cricket.result.scorecard.awayTeam.batsmens.total.wickets}</h2><b>({cricket.result.scorecard.awayTeam.batsmens.total.overs})</b></p> */}
                              {
                            cricket.result.stats.currentInning === 1 && cricket.result.scorecard.homeTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{cricket.result.stats.currentOver.score}/{cricket.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px"}}>({cricket.result.stats.battingTeam.overs}.{cricket.result.stats.battingTeam.balls})</p></p>: null
                           }
                           {
                            cricket.result.stats.currentInning === 1 && cricket.result.scorecard.homeTeam.isBattingTeam === false ? <p style={{lineHeight:"50%"}}>Yet To Bat</p> : null
                           }
                           {
                            cricket.result.stats.currentInning === 2 && cricket.result.scorecard.homeTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{cricket.result.stats.currentOver.score}/{cricket.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px"}}>({cricket.result.stats.battingTeam.overs}.{cricket.result.stats.battingTeam.balls})</p></p>: null
                           }
                           {
                            cricket.result.stats.currentInning === 2 && cricket.result.scorecard.homeTeam.isBattingTeam === false ? <p style={{opacity:"70%",lineHeight:"50%"}} ><h2>{cricket.result.scorecard.homeTeam.batsmens.total.score}/{cricket.result.scorecard.homeTeam.batsmens.total.wickets===null?cricket.result.scorecard.homeTeam.fallOfWickets.length:cricket.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({cricket.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                           }
                           </div>
                           

                        </div>
                        <div><p></p></div> 

                    </div>
                    
                    
                </div>
                {/* <div style={{textAlign:"center"}}><p><b>Target : {cricket.result.stats.battingTeam.target}</b> </p></div>   */}
                <div style={{textAlign:"center",lineHeight:"65%"}}>
                {
                   cricket.result.stats.status === "Completed"?null: cricket.result.stats.currentInning === 2 && cricket.result.scorecard.homeTeam.isBattingTeam === true ? <>
                  <div><br></br><p>{cricket.result.stats.battingTeam.name} needs {cricket.result.stats.battingTeam.requiredRuns} runs in {cricket.result.stats.remainingBalls} balls</p></div>
                  <div style={{textAlign:"center"}}><p><b> CRR : {cricket.result.stats.battingTeam.runRate} | RR : {cricket.result.stats.battingTeam.requiredRunRate}</b></p></div>  
                  </> : null
                }
                {/* {
                  cricket.result.stats.currentInning === 2 && cricket.result.scorecard.homeTeam.isBattingTeam === false ? <div style={{textAlign:"center"}}><br></br><p><b>Target : {cricket.result.stats.battingTeam.target}</b> </p></div> : null
                } */}
                </div>

                 <br></br>

                <div style={{display:"flex",justifyContent:"center",float:"left"}}>
                  <p style={{fontSize:"14px",textAlign:"center"}}>Away Team :</p>
                  </div> 
                  <br></br><br></br>
                 
                <div style={{display:"flex",justifyContent:"center"}}>
                    
                    <div style={{display:"flex",flexDirection:"row",columnGap:"50px"}}>
                        
                        <div style={{display:"flex",flexDirection:"column"}}>
                            
                            <div>
                             <p style={{justifyContent:"center",textAlign:"center"}}><img width="40px" height="30px" src="https://imgs.search.brave.com/rxEw53aScigW5Oh8htdcY1kdZCS0KKRIaVnd6AT0UQI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzExL0Zs/YWdfb2ZfU3JpX0xh/bmthLnN2Zy81MTJw/eC1GbGFnX29mX1Ny/aV9MYW5rYS5zdmcu/cG5n" title="India" class="cb-img-rad-0"/><br></br>
                             <p style={{textAlign:"center",fontSize:"13px",lineHeight:"200%"}}>{cricket.result.scorecard.awayTeam.name}</p></p>
                            </div>
                            <div>
                              
                            </div>

                        </div>

                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                           
                           <div style={{display:"inline-block",justifyContent:"center",textAlign:"center",paddingBottom:"25px"}}>
                           {/* <p><h2>{cricket.result.stats.currentOver.score}/{cricket.result.stats.currentOver.wickets}</h2><b>({cricket.result.stats.battingTeam.overs}.{cricket.result.stats.battingTeam.balls})</b></p> */}
                           {
                            cricket.result.stats.currentInning === 1 && cricket.result.scorecard.awayTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{cricket.result.scorecard.homeTeam.batsmens.total.score}/{cricket.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({cricket.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                           }
                           {
                            cricket.result.stats.currentInning === 1 && cricket.result.scorecard.awayTeam.isBattingTeam === false ? <p style={{lineHeight:"50%"}}>Yet To Bat</p> : null
                           }
                           {
                            cricket.result.stats.currentInning === 2 && cricket.result.scorecard.awayTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{cricket.result.stats.currentOver.score}/{cricket.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px",lineHeight:""}}>({cricket.result.stats.battingTeam.overs}.{cricket.result.stats.battingTeam.balls})</p></p>: null
                           }
                           {
                            cricket.result.stats.currentInning === 2 && cricket.result.scorecard.awayTeam.isBattingTeam === false ? <p style={{opacity:"70%",lineHeight:"50%"}} ><h2>{cricket.result.scorecard.homeTeam.batsmens.total.score}/{cricket.result.scorecard.awayTeam.batsmens.total.wickets===null?cricket.result.scorecard.awayTeam.fallOfWickets.length:cricket.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({cricket.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                           }
                           </div>
                           

                        </div>

                        <div></div>
                    </div>
                    
                </div>
                
                <div style={{textAlign:"center",lineHeight:"50%",fontSize:"15px"}}>
                { 
                  cricket.result.stats.status === "Completed"?<b style={{textAlign:"center",lineHeight:"200%"}}>{cricket.result.stats.commentary}</b> : cricket.result.stats.currentInning === 2 && cricket.result.scorecard.awayTeam.isBattingTeam === true ? <>
                  <div><br></br><br></br><p>{cricket.result.stats.battingTeam.name} needs {cricket.result.stats.battingTeam.requiredRuns} runs in {cricket.result.stats.remainingBalls} balls</p></div>
                  <div style={{textAlign:"center"}}><p><b> CRR : {cricket.result.stats.battingTeam.runRate} | RR : {cricket.result.stats.battingTeam.requiredRunRate}</b></p></div>  
                  </> : null
                }
                {/* {
                  cricket.result.stats.currentInning === 2 && cricket.result.scorecard.awayTeam.isBattingTeam === false ? <div style={{textAlign:"center"}}><br></br><p><b>Target : {cricket.result.stats.battingTeam.target}</b> </p></div> : null
                } */}
                
                 </div>
             

             <div style={{marginTop:"30px"}}>
             <hr  class="hr" />
             </div>
            {/* <div style={{"float":"left",marginTop:"5px"}}>
              <p style={{fontSize:"14px"}}>Batting :</p>
              </div> */}
              <div>
              <table class="table table-sm">
            <thead>
                <tr>
                  <th scope="col">Batting</th>
                  <th scope="col">Runs</th>
                  <th scope="col">4's</th>
                  <th scope="col">6's</th>
                  <th scope="col">SR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td>{cricket.result.stats.batsmen[0].name}</td>
                  <td>{cricket.result.stats.batsmen[0].batsmanRuns}({cricket.result.stats.batsmen[0].balls})</td>
                  <td>{cricket.result.stats.batsmen[0].fours}</td>
                  <td>{cricket.result.stats.batsmen[0].sixes}</td>
                  <td>{cricket.result.stats.batsmen[0].strikeRate}</td>
                </tr>
                <tr>
                 
                    <td>{cricket.result.stats.batsmen[1].name}</td>
                    <td>{cricket.result.stats.batsmen[1].batsmanRuns}({cricket.result.stats.batsmen[1].balls})</td>
                    <td>{cricket.result.stats.batsmen[1].fours}</td>
                    <td>{cricket.result.stats.batsmen[1].sixes}</td>
                    <td>{cricket.result.stats.batsmen[1].strikeRate}</td>
                </tr>
                
              </tbody>
          </table>
              </div>

              {/* <div style={{display:"flex",flexDirection:"row",justifyContent:"",columnGap:"50px",lineHeight:"50%",paddingTop:"0px",paddingBottom:"10px",float:"left"}}>

              <div style={{float:"left"}}>
              <p style={{fontSize:"14px",wordWrap:"break-word"}}><h6>{cricket.result.stats.batsmen[0].isOnStrike===true?"*":null}{cricket.result.stats.currentOver.batsNames[0]} : </h6>{cricket.result.stats.batsmen[0].batsmanRuns}({cricket.result.stats.batsmen[0].balls})<br></br></p>
              </div>

              <div style={{float:"right"}}>
              <p style={{fontSize:"14px",wordWrap:"break-word"}}><h6>{cricket.result.stats.batsmen[1].isOnStrike===true?"*":null}{cricket.result.stats.currentOver.batsNames[1]} :</h6> {cricket.result.stats.batsmen[1].batsmanRuns}({cricket.result.stats.batsmen[1].balls})</p>
                </div>

            </div> */}

            {/* <hr class="hr" /> */}
          {/* <div style={{"float":"left",lineHeight:"50%"}}>
              
           <p><p style={{fontSize:"14px"}}>Bowler :</p> <b>{cricket.result.stats.bowler.name} : </b> {cricket.result.stats.bowler.bowlerRuns}/{cricket.result.stats.bowler.wickets}  ({cricket.result.stats.bowler.overs})</p>
            
             
            </div> */}
             <table class="table table-sm" style={{width:"100%"}}>
            <thead>
                <tr>
                  <th scope="col">Bowling</th>
                  <th scope="col">&nbsp;</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td>{cricket.result.stats.bowler.name}</td>
                  <td><p>{cricket.result.stats.bowler.bowlerRuns}/{cricket.result.stats.bowler.wickets}&nbsp;&nbsp;({cricket.result.stats.bowler.overs})</p></td>
                  
                </tr>
               
                
              </tbody>
          </table>
             {/* <br></br> */}

             </div>
         </div>

         
      
   <div style={{marginTop:"4px"}}>

            <div>
            <div className="card">
            <div className="card-body">
      
                 <div style={{display:"flex",flexDirection:"column",columnGap:"10px"}}>
                    <div>
                       <div><b>Commentary : {cricket.result.stats.commentary} </b></div><br></br>
                       <div><p style={{fontSize:"14px"}}>Current over :</p></div>
                       <div><p><b>{cricket.result.stats.currentOver.bowlerName}</b> to <b>{cricket.result.stats.currentOver.batsNames[0]}</b> and <b>{cricket.result.stats.currentOver.batsNames[1]}</b></p></div>
                           <div  style={{display:"flex",flexDirection:"row",columnGap:"10px",flexWrap:"wrap"}}>

                              {
         
                                  cricket.result.stats.currentOver.balls.map((ball,i)=>{
          // console.log(i)
          // console.log(ball)
                                     return(
                                            <div key={i}>
                                              <p style={{backgroundColor:"red",color:"white",paddingLeft:"10px",paddingRight:"10px",textAlign:"center",borderRadius:"80px",fontSize:"18px"}}>{ball.value}</p>
                 
                                                </div> 
                                            )
                                   })

                              }
      
                            
                           
                            </div>
                           <div style={{padding:""}}>
                                <p><b>Ov {cricket.result.stats.currentOver.overNumber}  |  {cricket.result.stats.currentOver.runs} runs  |  {cricket.result.stats.currentOver.score}-{cricket.result.stats.currentOver.wickets}</b></p> 
                           </div>
                        </div>   
                        <hr class="hr" />
                    <div>
                     <div><p style={{fontSize:"14px"}}>Last Over :</p></div>
                          <div><p><b>{cricket.result.stats.lastOver.bowlerName}</b> to <b>{cricket.result.stats.lastOver.batsNames[0]}</b> and <b>{cricket.result.stats.lastOver.batsNames[1]}</b></p></div>
                            <div  style={{display:"flex",flexDirection:"row",columnGap:"10px",flexWrap:"wrap"}}>
                                   {
                                     cricket.result.stats.lastOver.balls.map((ball,i)=>{
          
                                           return(
                                                  <div key={i}>
                                                     <p style={{backgroundColor:"red",color:"white",paddingLeft:"10px",paddingRight:"10px",textAlign:"center",borderRadius:"80px",fontSize:"18px"}}>{ball.value}</p>
                 
                                                  </div> 
                                                  )
                                      })
        
                                    }
                             </div>

                          <div style={{padding:""}}><p><b>Ov {cricket.result.stats.lastOver.overNumber}  |  {cricket.result.stats.lastOver.runs} runs  |  {cricket.result.stats.lastOver.score}-{cricket.result.stats.lastOver.wickets}</b></p> </div>
                     </div>
     
     
     
                  </div>
               </div>
              </div>
              </div>
    
    </div>


          </div>
          
          
        
       











      )}
    </div>
  </>
  )
}
