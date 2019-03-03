window.onload=()=>{
  //https://api.openweathermap.org/data/2.5/forecast?id=524901
  //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aee42e804382eda552bfe9d42fc8bba5'
//document.getElementById('btn').addEventListener('click', loadText)
let url1 = "https://api.openweathermap.org/data/2.5/forecast?q=Lagos&appid=aee42e804382eda552bfe9d42fc8bba5"
//setInterval(function(){

$(".button").click(function(){
  let display=$(this).html()
  if (display=="+"){
    $(this).html("-")
  }
  else{$(this).html("+")}
})

  var xhr = new XMLHttpRequest()
  xhr.open('GET', url1, true)
  xhr.onload= function(){
    if (this.status==200){
      console.log("yes")
      //let i= 1
      for (let i=0; i<=5; i++){
      let temp1=(JSON.parse(this.responseText).list[i].main.temp - 273).toFixed(1)
      let tempMax1=(JSON.parse(this.responseText).list[i].main.temp_max - 273).toFixed(1)
      let tempMin1=(JSON.parse(this.responseText).list[i].main.temp_min - 273).toFixed(1)
      let pressure1=(JSON.parse(this.responseText).list[i].main.pressure).toFixed(1)
      let humidity1=(JSON.parse(this.responseText).list[i].main.humidity).toFixed(1)
      let windSpeed1=(JSON.parse(this.responseText).list[i].wind.speed).toFixed(1)
      let windDeg1=(JSON.parse(this.responseText).list[i].wind.deg).toFixed(1)
      let desc1=(JSON.parse(this.responseText).list[i].weather[0].description)
      let rain1=(JSON.parse(this.responseText).list[i].rain)
      let seaLevel1=(JSON.parse(this.responseText).list[i].main.sea_level)
      let groundLevel1=(JSON.parse(this.responseText).list[i].main.grnd_level)
      let date1=(JSON.parse(this.responseText).list[i].dt_txt)
      
      let temp = `#temp${i}`
      let tempMax = `#tempMax${i}`
      let tempMin = `#tempMin${i}`
      let pressure = `#pressure${i}`
      let humidity = `#humidity${i}`
      let humid = `#humid${i}`
      let windSpeed = `#windSpeed${i}`
      let windDeg = `#windDeg${i}`
      let rain = `#rain${i}`
      let seaLevel = `#seaLevel${i}`
      let groundLevel = `#groundLevel${i}`
      let desc = `#desc${i}`
      let day = `#day${i}`


      $(temp).html(temp1)
      $(tempMax).html(tempMax1)
      $(tempMin).html(tempMin1)
      $(pressure).html(pressure1)
      $(humidity).html(humidity1)
      $(humid).html(humidity1)
      $(windSpeed).html(windSpeed1)
      $(windDeg).html(windDeg1)
      $(rain).html(rain1)
      $(seaLevel).html(seaLevel1)
      $(groundLevel).html(groundLevel1)
      $(desc).html(desc1)
      $(day).html(date1)
      
      
      }

    }
  

}
  xhr.send()

//SEARCH


$(".search").click(function(){
let cityName = $("#inputCity").val()
$("#city").html(cityName)
let currentCity=cityName
let url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aee42e804382eda552bfe9d42fc8bba5"

let url2 = "https://api.openweathermap.org/data/2.5/forecast?q="+currentCity+"&appid=aee42e804382eda552bfe9d42fc8bba5"
//setInterval(function(){

  
console.log(cityName)
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url2, true)
  xhr.onload= function(){
    if (this.status==200){
      console.log("yes")
      //let i= 1
      for (let i=0; i<=5; i++){
      let temp1=(JSON.parse(this.responseText).list[i].main.temp - 273).toFixed(1)
      let tempMax1=(JSON.parse(this.responseText).list[i].main.temp_max - 273).toFixed(1)
      let tempMin1=(JSON.parse(this.responseText).list[i].main.temp_min - 273).toFixed(1)
      let pressure1=(JSON.parse(this.responseText).list[i].main.pressure).toFixed(1)
      let humidity1=(JSON.parse(this.responseText).list[i].main.humidity).toFixed(1)
      let windSpeed1=(JSON.parse(this.responseText).list[i].wind.speed).toFixed(1)
      let windDeg1=(JSON.parse(this.responseText).list[i].wind.deg).toFixed(1)
      let desc1=(JSON.parse(this.responseText).list[i].weather[0].description)
      let rain1=(JSON.parse(this.responseText).list[i].rain)
      let seaLevel1=(JSON.parse(this.responseText).list[i].main.sea_level)
      let groundLevel1=(JSON.parse(this.responseText).list[i].main.grnd_level)
      let date1=(JSON.parse(this.responseText).list[i].dt_txt)
      
      let temp = `#temp${i}`
      let tempMax = `#tempMax${i}`
      let tempMin = `#tempMin${i}`
      let pressure = `#pressure${i}`
      let humidity = `#humidity${i}`
      let windSpeed = `#windSpeed${i}`
      let windDeg = `#windDeg${i}`
      let rain = `#rain${i}`
      let seaLevel = `#seaLevel${i}`
      let groundLevel = `#groundLevel${i}`
      let desc = `#desc${i}`
      let day = `#day${i}`


      $(temp).html(temp1)
      $(tempMax).html(tempMax1)
      $(tempMin).html(tempMin1)
      $(pressure).html(pressure1)
      $(humidity).html(humidity1)
      $(windSpeed).html(windSpeed1)
      $(windDeg).html(windDeg1)
      $(rain).html(rain1)
      $(seaLevel).html(seaLevel1)
      $(groundLevel).html(groundLevel1)
      $(desc).html(desc1)
      $(day).html(date1)
      
      
      }

    }
  

}
  xhr.send()
//}

})
//},500)


setInterval(function(){
let d=new Date()
let second = d.getSeconds()
let minute = d.getMinutes()
let hour = d.getHours()
let year = d.getFullYear()
let month = d.getMonth()+1
let day = d.getDate()
if (second<10){
  second=`0${second}`
}
if (minute<10){
  minute=`0${minute}`
}
if (hour<10){
  hour=`0${hour}`
}
let time = `${hour}:${minute}:${second} GMT+1   ${day}/${month}/${year}`

  $("#dateTime").html(time)

},1000)



}