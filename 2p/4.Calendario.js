class calendar{

    printCalendar(mes,year) {
        let dias = 0;
        let cont = 1;
        let inicioMes = 0;
        let calendar = new Array(5);
        for (let i = 0; i < 5; i++) {
            calendar[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                calendar[i][j] = 0;
            }
        }
        let x = this.firstDay(year);
        
        if (this.isleapYear(year)==true) {
            if (mes == 2) {
                dias = 29;
                inicioMes = (x + 31) % 7;
            }
        } else {
            switch (mes) {
                case 1:
                    dias = 31;
                    inicioMes = x;
                    break;
                case 2:
                    dias = 28;
                    inicioMes = (x + 31) % 7;
                    break;
                case 3:
                    dias = 31;
                    inicioMes = (x + 59) % 7;
                    break;
                case 4:
                    dias = 30;
                    inicioMes = (x + 90) % 7;
                    break;
                case 5:
                    dias = 31;
                    inicioMes = (x + 120) % 7;
                    break;
                case 6:
                    dias = 30;
                    inicioMes = (x + 151) % 7;
                    break;
                case 7:
                    dias = 31;
                    inicioMes = (x + 181) % 7;
                    break;
                case 8:
                    dias = 31;
                    inicioMes = (x + 212) % 7;
                    break;
                case 9:
                    dias = 30;
                    inicioMes = (x + 243) % 7;
                    break;
                case 10:
                    dias = 31;
                    inicioMes = (x + 273) % 7;
                    break;
                case 11:
                    dias = 30; 
                    inicioMes = (x + 304) % 7;
                    break;
                case 12:
                    dias = 31;
                    inicioMes = (x + 334) % 7;
                    break;
                default:
                    dias = "Error"
                    break;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                for (let j = inicioMes; j < 7; j++) {
                    calendar[i][j] = cont;
                    cont++
                }
            } else {
                for (let j = 0; j < 7; j++) {
                
                    if (cont <= dias) {
                        calendar[i][j] = cont;
                        cont++;
                    }
                }
            }

        }
        return calendar;


    }

    todayPlus(dia, num) {
    
        if (dia == "Lunes" || dia == "lunes" || dia == "LUNES") {
            num = num+1;
        } else if (dia == "Martes" || dia == "martes" || dia == "MARTES") {
            num = num + 2;
        } else if (dia == "Miercoles" || dia == "miercoles" || dia == "MIERCOLES") {
            num = num + 3;
        } else if (dia == "Jueves" || dia == "jueves" || dia == "JUEVES") {
            num = num + 4;
        } else if (dia == "Viernes" || dia == "viernes" || dia == "VIERNES") {
            num = num + 5;
        } else if (dia == "Sabado" || dia == "sabado" || dia == "SABADO") {
            num = num + 6;
        } else if (dia == "Domingo" || dia == "domingo" || dia == "DOMINGO") {
            num = num ;
        }
    
        switch (num % 7) {
            case 0:
                this.num = "Domingo";
                break;
            case 1:
                this.num = "Lunes";
                break
            case 2:
                this.num = "Martes";
                break
            case 3:
                this.num = "Miercoles";
                break
            case 4:
                this.num = "Jueves";
                break;
            case 5:
                this.num = "Viernes";
                break;
            case 6:
                this.num = "Sabado";
                break;
        }
        return this.num;
    }
    
    isleapYear(year){
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
    }
    
    friday13(year){
        let count = 0;
    for (let month=0; month<12; month++) {
        let d = new Date(year,month,13);
        if(d.getDay() == 5){
          count++;
       }
    }
    return count;   
    }
    
    firstDay(y){
        let x;
        x = new Date(y, 0, 1);
        return x;        
    }    

}
( function useCalendario() {
    console.log(com = new calendar)
    console.log(com.todayPlus(2, 9))
    console.log(com.isleapYear(2019))
    console.log(com.friday13(2019))
    console.log(com.firstDay(2019))
    console.log(com.printCalendar(10,2019)); 
})()