import React, { useState } from 'react';
import Feed from '../Feed/Feed';
import FlatList from 'flatlist-react';
import home from "../../assets/images/home.png";
import messenger from "../../assets/images/messenger.png"
import explore from "../../assets/images/explore.png"
import beforeLike from "../../assets/images/before_like.png"
import addPost from "../../assets/images/add_post.png"
import logo from "../../assets/images/logo.png"
import styles from "./Home.module.css";

const Home = () => {

    const [placeholderText, setPlaceHolderText] = useState("Search");
    const [searchText, setSearchtext] = useState("");

   
    const localApiData = {
        "meta": {
          "code": 200
        },
        "data": [
          {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": "1440501087",
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "image_url":"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11906267_1671515619746683_1237948463_n.jpg",
                "width": 320,
                "height": 320
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/11906267_1671515619746683_1237948463_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11906267_1671515619746683_1237948463_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": {
              "created_time": "1440501087",
              "text": "Logon this is the logo of PRDP, matlab Prem Ratan Dhan Payo. Coming this Diwali",
              "from": {
                "username": "beingsalmankhan",
                "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
                "id": "1547627005",
                "full_name": "Salman Khan"
              },
              "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "id": "1059322354827483655_1547627005",
            "user": {
              "username": "beingsalmankhan",
              "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
              "id": "1547627005",
              "full_name": "Salman Khan"
            }
          },
          {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": "1440499397",
            "link": "https://instagram.com/p/6zay6yBWhr/",
            "image_url":"https://www.jquery-az.com/html/images/banana.jpg",

            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11950690_308991979224936_345640148_n.jpg",
                "width": 320,
                "height": 320
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11950690_308991979224936_345640148_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11950690_308991979224936_345640148_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": {
              "created_time": "1440499397",
              "text": "Novitec Rosso\nfollow @Cars @Cars @Cars @Cars | Photographer @cars.of.munich |",
              "from": {
                "username": "carinstagram",
                "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11375185_1623356661262376_878819060_a.jpg",
                "id": "23275345",
                "full_name": "Kik:SoLeimanRT"
              },
              "id": "1059308188572412119"
            },
            "user_has_liked": false,
            "id": "1059308185661565035_23275345",
            "user": {
              "username": "carinstagram",
              "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_23275345_75sq_1381623938.jpg",
              "id": "23275345",
              "full_name": "Kik:SoLeimanRT"
            }
          },
          {
            "attribution": null,
            "tags": [
              "thehuntingpartytour"
            ],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": "1440501526",
            "link": "https://instagram.com/p/6ze2yyi4eV/",
            "image_url":"https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg",

            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11909202_461512274021020_2138194013_n.jpg",
                "width": 320,
                "height": 320
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11909202_461512274021020_2138194013_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11909202_461512274021020_2138194013_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": {
              "created_time": "1440501526",
              "text": "Before / After - Rybnik tonight. #TheHuntingPartyTour",
              "from": {
                "username": "linkinpark",
                "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11008267_1563640687237549_939346370_a.jpg",
                "id": "4890736",
                "full_name": "LINKIN PARK"
              },
              "id": "1059326047021663524"
            },
            "user_has_liked": false,
            "id": "1059326044144371605_4890736",
            "user": {
              "username": "linkinpark",
              "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11008267_1563640687237549_939346370_a.jpg",
              "id": "4890736",
              "full_name": "LINKIN PARK"
            }
          },
          {
            "attribution": null,
            "tags": [
              "marmaris",
              "turkey",
              "dhotel"
            ],
            "type": "image",
            "location": null,
            "filter": "Juno",
            "created_time": "1440495224",
            "link": "https://instagram.com/p/6zS1b4OLoe/",
            "image_url":"https://www.gstatic.com/webp/gallery/1.jpg",

            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11875537_123827731297227_268751140_n.jpg",
                "width": 320,
                "height": 320
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11875537_123827731297227_268751140_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11875537_123827731297227_268751140_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": {
              "created_time": "1440495224",
              "text": "#marmaris #dhotel #Turkey",
              "from": {
                "username": "sert_mehmet",
                "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11032891_610949965673163_728033182_a.jpg",
                "id": "7563629",
                "full_name": "Mehmet Se®t"
              },
              "id": "1059274169221954465"
            },
            "user_has_liked": false,
            "id": "1059273174265936414_7563629",
            "user": {
              "username": "sert_mehmet",
              "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11032891_610949965673163_728033182_a.jpg",
              "id": "7563629",
              "full_name": "Mehmet Se®t"
            }
          },
          {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": "1440501996",
            "link": "https://instagram.com/p/6zfwHMEXBY/",
            "image_url":"https://www.gstatic.com/webp/gallery/4.jpg",

            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11821069_1683591315208464_1921774986_n.jpg",
                "width": 320,
                "height": 320
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11821069_1683591315208464_1921774986_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11821069_1683591315208464_1921774986_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": {
              "created_time": "1440501996",
              "text": "jiff💙",
              "from": {
                "username": "jiffpom",
                "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10534848_1445438965724038_834552885_a.jpg",
                "id": "194146115",
                "full_name": "jiff"
              },
              "id": "1059329986589192786"
            },
            "user_has_liked": false,
            "id": "1059329983057588312_194146115",
            "user": {
              "username": "jiffpom",
              "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10534848_1445438965724038_834552885_a.jpg",
              "id": "194146115",
              "full_name": "jiff"
            }
          }
        ]
      }

    
    const localSuggestionData = {
        data : [
            {
                name:"Steve",
                image_url:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            },
            {
                name:"Peter",
                image_url:"https://www.jquery-az.com/html/images/banana.jpg"
            },
            {
                name:"Sherlock",
                image_url:"https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg"
            },
            {
                name:"Tony Stark",
                image_url:"https://www.gstatic.com/webp/gallery/1.jpg"
            },
            {
                name:"Bruce",
                image_url:"https://www.gstatic.com/webp/gallery/4.jpg"
            },

        ]
    }
    
    const renderStatusHandler = (data) =>{
        return(
            <div>
                <p>{data.caption.text}</p>
            </div>
        )
    }
    
    
    return (
        <div className={styles.container}>
            <div className={styles.headerStyle}>
                <div className={styles.instaLogoStyle}>
                {/* <div style={style.instaLogoStyle }> */}
                <div className={{marginRight:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={logo} style={{height:"50px", width:"150px"}}/>

                    </div>
                {/* </div> */}
                </div>

                <div className={styles.searchContainer}>
                {/* <div style={style.searchContainer}> */}
                <input 
                value={searchText}
                 onChange={(e)=>{setSearchtext(e.target.value)}} 
                 className={styles.searchBar} 
                 placeholder={placeholderText}
                  onFocus={()=>{setPlaceHolderText("")}} 
                  onBlur={()=>{setPlaceHolderText("Search")}}>
                 </input>
                 {/* <div style={{position:"absolute", right:"35%", border: "1px", backgroundColor:"lightgray", borderRadius:"100px", height:"20px", width:"20px", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
                     <p style={{color:"gray", cursor:"pointer"}}>x</p>
                 </div> */}
                 {/* <p style={{color:"lightgray", position:"absolute", top:"1%", right:"35%"}} >x</p> */}
                 {/* </div> */}
                 </div>

                 <div style={{width:"30%", 
                //  backgroundColor:"green",
                  display:"flex", justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>
                 <div style={{marginLeft:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={home} style={{height:"25px", width:"25px"}}/>
                    </div>
                    <div style={{marginLeft:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={messenger} style={{height:"25px", width:"25px"}}/>
                    </div>
                    <div style={{marginLeft:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={addPost} style={{height:"50px", width:"50px"}}/>
                    </div>
                    <div style={{marginLeft:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={explore} style={{height:"25px", width:"25px"}}/>
                    </div>
                    <div style={{marginLeft:"20px", cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img src={beforeLike} style={{height:"25px", width:"25px"}}/>
                    </div>
                 </div>
            </div>
            <div className={styles.bodyStyle}>
            {/* <h1>body</h1> */}

                 

            <div className={styles.statusTopContainer}>

            <div className={styles.statusInnerContainer}>
                {localApiData.data.map((item)=>{
                    console.log("map item", item)
                    return(
                        <div className={styles.statusTopBody}>
                            <div className={styles.statusInnerBody}>
                   <img style={{height:"60px", width:"60px", borderRadius:"100px",}} src={item.image_url}/>

                            </div>
                            <div >
                            <p>{item.user.username.split("").slice(0,7).join("")}...</p>
                                {/* <p >{item.user.username}</p> */}
                            </div>
                            {/* <p>{item.caption.text}</p> */}
                        </div>
                    )
                })}

                {/* <FlatList
                list={localApiData.data}
                renderItem={renderStatusHandler}
                /> */}
            </div>

                {localApiData.data.map((item)=>{
                    // console.log(item.caption.text)
                    return(
                        <Feed caption={item}/>
                    )
                })}
            </div>

            <div className={styles.rightBodyContainer}>

                <div className={styles.rightBodyinnerContainerOne}>
                <div className={styles.rightBodyinnerContainerTwo}>

                      <img style={{height:"70px", width:"70px", borderRadius:"100px",}} src={"https://www.gstatic.com/webp/gallery/2.jpg"}/>
                  </div>

                <div className={styles.rightBodyinnerContainerThree}>
                    <div className={styles.rightBodyinnerContainerFour}>
                    <div style={{}}>Aravindhasamy</div>
                    <div style={{color:"gray"}}>Aravind_123</div>
                    </div>
                    <div style={{marginLeft:"70px"}}>
                        <p style={{color:"rgba(var(--d69,0,149,246),1)"}}>Switch</p>
                    </div>
                </div>
                </div>

                <div style={{height:"320px", width:"350px",
                //  backgroundColor:"violet"
                 }}>
                    <div className={styles.rightBodyinnerContainerFive}>
                        <div>Suggestions for you</div>
                        <div>See All</div>
                    </div>

                    { localSuggestionData.data.map((item) =>{
                        return(

                       
                    <div className={styles.suggestionContainer}>

                           <div className={styles.suggestionContainerOne}>
                           <div className={styles.suggestionContainerTwo}>
                  <img style={{height:"40px", width:"40px", borderRadius:"100px",}} src={item.image_url}/>

                  </div>

                  <div className={styles.suggestionContainerThree}>
                        <div>{item.name}</div>
                        <div style={{color:"rgba(var(--d69,0,149,246),1)"}}>Follow</div>
                  </div>
                        {/* <div>See All</div> */}
                    </div>
                    </div>
                     )
                    })
}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;