
import {select} from 'd3-selection'
import './styles.scss'
import {Promise} from 'es6-promise';
import {InMemoryFilmLocatioRepository} from './repositories/movie-location.repository';

export class Visualizer {

    init(){
        select("body").append("p").text("Test 2");

        new Promise<string>(
            (resolve: (str: string)=>void, reject: (str: string)=>void) => {
            const a: string = "hello from Promise";
            
            resolve(a);
        }).then((b) => console.log(b))

        var repo = new InMemoryFilmLocatioRepository();

        repo.getGroups("test").then((data) => {
            console.log(data)

        }) 
        
        
        


    }


}

new Visualizer().init();


