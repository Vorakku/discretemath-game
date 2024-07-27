<script>
  import { onMount } from "svelte";
    import { playerPos } from "../stores";
    
    /**
   * @type {{moveCounts: Number, row: Number; col: Number, playerStart: {row: Number, col: Number} }}
   */
    let playerPosData;

    let isWrong = false;
    let isCorrect = false;

    playerPos.subscribe(value => {
        playerPosData = value;
    });

    /**
     * @type {{path: Array<Number>,row: Number, col: Number, number: Number}}
    */
    export let data = {
        path: [],
        row: 0,
        col: 0,
        number: 0
    };

    function playerClick() {
        if(isCorrect) return;
        if(playerPosData.col == data.col && playerPosData.row == data.row - 1) {
            movePlayer(); //Move Bottom
        }
        else if(playerPosData.col == data.col + 1 && playerPosData.row == data.row) {
            movePlayer() //Move Right
        }
        else if(playerPosData.col == data.col && playerPosData.row == data.row + 1)
        {
            movePlayer() //Move Top
        }
        else if(playerPosData.col == data.col - 1 && playerPosData.row == data.row)
        {
            movePlayer() //Move Left
        }
    }

    function movePlayer() {
        if(data.path[playerPosData.moveCounts] == data.number) {
            playerPosData.row = data.row;
            playerPosData.col = data.col;
            playerPosData.moveCounts++;
            isWrong = false;
            isCorrect = true;
            playerPos.update(value => playerPosData);
        }
        else {
            isWrong = true;
        }
    }

</script>

<button on:click={playerClick} class="cell" class:correct={isCorrect || playerPosData.playerStart.row == data.row && playerPosData.playerStart.col == data.col} class:wrong={isWrong}>
    {#if playerPosData.row == data.row && playerPosData.col == data.col}
        <div>
            <h5>Me</h5>{data.number}
        </div>
    {:else}
        {data.number}
    {/if}
</button>

<style>
    .cell {
        display: grid;
        place-items: center;
        width: 100px;
        height: 100px;
        border: 1px solid rgb(255, 0, 234);
        text-align: center;
        background-color: rgba(0, 0, 0, 0.25);
        font-size: 2rem;
        color: white;
    }
    .wrong {
        background-color: rgb(255, 0, 0);
    }
    .correct {
        background-color: rgb(0, 225, 255);
    }
    h5 {
        margin: 0;
        line-height: 1;
        font-size: 2rem;
        color: white;
    }
</style>