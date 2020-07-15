import { Component, OnInit, Input } from '@angular/core';
import { FormValidators } from '../../../../classes/formValidators';
import { SepomexService } from '../../services/sepomex.service';
import { MapOptions,Map, latLng, tileLayer, Marker, icon } from 'leaflet';
import 'leaflet';
declare let L;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
@Input() parentform;
@Input() validFormBySubmit;
cp_Data = [];
suburbsData = [];
showmap = false;

lat =  0;
long = 0;

map: Map;
mapOptions: MapOptions;
// coords = false;
marker;


  constructor(public val: FormValidators,private sepomexservice:SepomexService) {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.lat =  pos.lat;
         this.long = pos.lng;
         this.parentform.patchValue({lat:this.lat, lng:this.long});
         console.log(this.parentform.value);
         this.initializeMapOptions();
      });
   }

  ngOnInit() {
    
  }

  serchZipCode(event){
    if (event.length == 5) {
      this.sepomexservice.getCpData(event).subscribe(
        (result)=>{
          console.log(result);
          this.cp_Data = result;

          for (let index = 0; index < this.cp_Data.length; index++) {
          let row = {label:this.cp_Data[index].asentamiento,value:{name:this.cp_Data[index].asentamiento, i: index}}
           this.suburbsData.push(row); 
          }
        }
      )
    }
  }
  setValues(event){
    const index = event.value.i;
    console.log(index);
    let data = {
      city: this.cp_Data[index].municipio,
      state: this.cp_Data[index].estado,
      country: this.cp_Data[index].pais
    }
    console.log(this.cp_Data);
    this.parentform.patchValue(data);
  }


  initializeMapOptions() {
    
  
    


    this.mapOptions = {
      center: latLng(this.lat,this.long),
      zoom: 18,
      layers: [
        tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors',
            id:'mapbox/streets-v11',
            accessToken:'pk.eyJ1IjoibHVpc2FndWlsYXI5MiIsImEiOiJja2M0NWgwaWgwNGo3MnhtczFwNmZndTl5In0.vaARqBb84GWnXANoYL7FYQ'
          })
      ],
    };

    this.showmap = true;

}

onMapReady(map:Map){
  this.map = map;
  this.addSampleMarker();

  this.map.on("click", (e) =>{
    this.onMapClick(e);
  });
}

onMapClick(event){
  let coords = event.latlng;
  console.log("Map click event",coords);
  this.lat = coords.lat;
  this.long = coords.lng;
  this.parentform.patchValue({lat:this.lat, lng:this.long});
  console.log(this.parentform.value);

  this.marker.setLatLng(coords);
}

getPosition(): Promise<any>
{
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(resp => {

        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
  });

}

private addSampleMarker() {
  this.marker = new Marker([this.lat, this.long])
    .setIcon(
      icon({
        iconSize: [25, 25],
        iconAnchor: [25, 25],
        iconUrl: 'assets/icons/icon-72x72.png'
      }));


  this.marker.addTo(this.map);
  }




}
