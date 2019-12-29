export function tpl(system: string) {
    return `
    <div class="special-dice-roller">
        <div>
            <form>
                {{#rolls}}
                <input type="checkbox" style="background-image: url('modules/special-dice-roller/public/images/${system}/{{imageName}}.png')" name="roll{{rollIndex}}" data-die="{{die}}" data-face="{{face}}" disabled/>
                {{/rolls}}
            </form>
        </div>
        <hr>
        <div>
            <ul>
            {{#results}}
                {{#succeeded}}
                <li class="special-dice-roller-succeeded">Check: succeeded</li>
                {{/succeeded}}
                {{^succeeded}}
                <li class="special-dice-roller-failed">Check: failed</li>
                {{/succeeded}}
                {{#successes}}
                <li>Successes: {{successes}}</li>
                {{/successes}}
                {{#failures}}
                <li>Failures: {{failures}}</li>
                {{/failures}}
                {{#advantages}}
                <li>Advantages: {{advantages}}</li>
                {{/advantages}}
                {{#threats}}
                <li>Threats: {{threats}}</li>
                {{/threats}}
                {{#triumphs}}
                <li>Triumphs: {{triumphs}}</li>
                {{/triumphs}}
                {{#despairs}}
                <li>Despairs: {{despairs}}</li>
                {{/despairs}}
                {{#force}}
                <li>Force: {{force}}</li>
                {{/force}}
                {{#darkForce}}
                <li>Dark Force: {{darkForce}}</li>
                {{/darkForce}}
            {{/results}}
            </ul>
        </div>
    </div>
    `;

}