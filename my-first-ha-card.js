class MyFirstHACard extends HTMLElement
{
    set hass(hass)
    {
        if (!this.content)
        {
            this.innerHTML = `
                <ha-card header="My-First-Card">
                    <div class="card-content"></div>
                </ha-card>
            `;

            this.content = this.querySelector("div");
        }

        const entityId = this.content.entity;
        const state = hass.states(entityId);
        const stateStr = state ? state.state : "unavailable";

        this.content.innerHTML = `
            The state of ${entityId} is ${stateStr}!
            <br><br>
            [add additional content here]
        `;
    }

    setConfig(config)
    {
        if (!config.entity)
        {
            throw new Error("You need to define an entity.");
        }

        this.config = config;
    }

    getCardSize()
    {
        //---- Not sure what 3 means... ----
        return 3;
    }

    getGridOptions()
    {
        return {
            rows: 3,
            columns: 6,
            min_rows: 3,
            max_rows: 3
        };
    }
}

customElements.define("my-first-ha-card", MyFirstHACard);
