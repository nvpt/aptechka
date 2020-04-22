import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'inlineSearch'
})
export class InlineSearchPipe implements PipeTransform {
    transform(elements: any[], stringSearch: string = '', options?: string[]): any[] {
        if (!stringSearch.trim()) {
            return elements;
        }

        return elements.filter((element) =>
            options.some(
                (option) => element[option] && element[option].toLowerCase().includes(stringSearch.toLowerCase())
            )
        );
    }
}
