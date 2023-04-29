import { 
    attach,
    div,
    h1,
    h2,
    ul, li,
    table, thead, tbody, tr, th, td
} from './modules/only.js'

const content = div(
    h1('Hello World!'),
    h2('this is a ui library in less than 200 lines of JavaScript'),
    div(
        ` I feel that UI libraries are bloated. So I decided to make an
          experiment...
        `,
        div(
            'Here is a nested div that contains a list',
            ul(
                li('First item'),
                li('Second item'),
                li('Third item'),
            )
        ),
        div(
            'Here is another nested div with a table inside',
            table(
                thead(
                    tr(
                        th('Column 1'),
                        th('Column 2'),
                        th('Column 3')
                    ),
                ),
                tbody(
                    tr(
                        td('Datum 1'),
                        td('Datum 2'),
                        td('Datum 3')
                    )
                )
            )
        )
    )
);

attach('#root', content);
