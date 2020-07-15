import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
}
)

export class Dates {

    format_date(date){
        if (!date) {
            return '';
        }
        let fecha:any  = new Date(date);
        fecha = JSON.stringify(fecha);
        fecha = fecha.slice(1,11);
        return fecha;
    }

    itsBirthday(date){
        console.log(date);
        // date[6]+date[7]+date[8]+date[9]+date[2]+date[3]+date[4]+date[2]+date[0]+date[1];
        let fixday = date.slice(6,10)+date.slice(2,5)+"/"+date.slice(0,2);
        console.log(fixday);


        const birthday = new Date(fixday);
        const formatBirthday = '0000' + "-" + (birthday.getMonth() +1) + "-" + birthday.getDate();
        
        console.log(formatBirthday);

        const today = new Date();
        const formatToday = '0000' + "-" + (today.getMonth() +1) + "-" + today.getDate();
        console.log("F",formatToday);
        // var resultado = formatToday.getTime() === formatBirthday.getTime();


        // const birthday = this.format_date(date);
        // const f = new Date();
        // const today = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();

    
        const birthdayd = new Date(formatBirthday);
        const todayd = new Date(formatToday);
        var resultado = todayd.getTime() === birthdayd.getTime();

        // return resultado;
        // return 'Hoy:'+today+" Cumple:"+birthday

        return resultado;
    }

}

// Thu Jun 25 2020 00:00:00 GMT-0500 (hora de verano central)
// Thu Jun 25 2020 01:00:26 GMT-0500 (hora de verano central)
