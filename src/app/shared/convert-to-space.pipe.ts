import { PipeTransform, Pipe } from "@angular/core";


//1. Declare decorator
@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}
