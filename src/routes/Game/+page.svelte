<script>
  import { onMount } from "svelte"; //Import data from sveltes.
    import Cell from "../../components/Cell.svelte"; //Import cell from svelte in components
    import { playerPos } from "../../stores";  //Import player postition which has been declared in stores.
    
    /**
   * @type {{moveCounts: Number, row: Number, col: Number, playerStart: {row: Number, col: Number} }} //Typeof to check and return the data type of the operand passes to it.
   */
    let playerPosData; //Declare playerPosData
    playerPos.subscribe(value => {  //
        playerPosData = value;
    });

    let choosenMap = 0;

    onMount(() => {{
        choosenMap = Math.floor(Math.random() * map.length);
        playerPosData.row = map[choosenMap].startPos.row;
        playerPosData.col = map[choosenMap].startPos.col;
        playerPosData.playerStart.row = map[choosenMap].startPos.row;
        playerPosData.playerStart.col = map[choosenMap].startPos.col;
        playerPos.update(value => playerPosData);
    }})

     /**
     * @type {Array<{startPos: {row: Number, col: Number}, grid: Array<Array<Number>>, path: Array<Number>, formula: String}>}
     */
    let map = [
        {
            startPos: {
                row: 1,
                col: 0
            },
            grid: 
            [
                [1, 3, 10, 11, 12, 17],
                [2, 3, 9, 22, 23, 14],
                [5, 4, 9, 43, 24, 23],
                [6, 7, 8, 9, 34, 6],
                [12, 1, 2, 10, 19, 12],
                [9, 5, 4, 11, 12, 11]
            ],
            path: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            formula: "n+1  (n start from 1)"
        },
        {
            startPos:{
                row: 0,
                col: 1
            },
            grid: 
            [
                [14, 2, 3, 2, 21, 17],
                [1, 4, 8, 16, 6, 14],
                [4, 11, 33, 32, 513, 1024],
                [5, 15, 124, 64, 512, 1024],
                [12, 1, 8, 128, 256, 257],
                [14, 13, 7, 6, 5, 1024]    
            ],
            path: [2,4,8,16,32,64,128,256,512,1024],
            formula: "2^n   (n start from 1)" 
        },
        
        {
            startPos:{
                row:0,
                col:0
            },
            grid: 
            [
                [1, 2, 9, 2, 21, 17],
                [3, 3, 4, 5, 6, 14],
                [5, 7, 6, 43, 7, 23],
                [5, 9, 10, 9, 23, 25],
                [12, 11, 14, 8, 21, 23],
                [14, 13, 15, 17, 19, 11]    
            ],
            path: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
            formula: "2n-1 (n start from 1)"
        },
        {
            startPos:{
                row:3,
                col:2
            },
            grid: 
            [
                [100, 81, 64, 49, 45, 64],
                [3, 16, 25, 36, 6, 14],
                [5, 9, 2, 43, 7, 23],
                [5, 4, 1 ,3, 23, 25],
                [12, 64, 3, 257, 512, 23],
                [14, 13, 256, 17, 1024, 11]    
            ],
            path: [1, 4, 9, 16, 25, 36, 49, 64,81,100],
            formula: "n^2 (n start from 1)"
        },
        {
            startPos:{
                row:5,
                col:1    
            },
            grid: 
            [
                [223, 41, 9132, 223, 2111, 1723],
                [333, 821, 4434, 523, 632, 1423],
                [512, 1643, 455, 434, 723, 23],
                [534, 75, 375 ,934, 232, 2523],
                [12, 15, 1875, 2575, 512, 2312],
                [1442, 3, 9375, 1712, 1024, 298]    
            ],
            path: [3, 15, 75, 375, 1875, 9375],
            formula: "3 * 5^n-1 (n start from 1)"
        },
        {
            startPos:
            {
                row:0,
                col:0
            },
            grid:
            [
                [5,8,12,28,23,13],
                [8,11,17,34,43,62],
                [13,14,17,20,52,14],
                [18,17,20,26,34,41],
                [12,20,35,32,37,64],
                [42,23,26,29,17,72]
            ],
            path: [5,8,11,14,17,20,23,26,29,32,35],
            formula: "3n+2 (n start from 1)"
        },

        {
            startPos:
            {
                row:0,
                col:4
            },
            grid:
            [
                [23,19,4,2,1,3],
                [1024,256,64,16,4,6],
                [4096,24,36,24,8,12],
                [1092,36,92,64,43,9],
                [2048,48,54,23,78,72],
                [82,64,43,73,21,45]
            ],
            path: [1,4,16,64,256,1024,4096],
            formula: "4^n-1 (n start from 1)"
        },
        {
            startPos:{
                row:0,
                col:2
            },
            grid: 
            [
                [8, 12, 2, 5425, 41, 31],
                [65, 13, 6, 7, 467, 414],
                [23, 21, 12, 20, 56, 364],
                [123, 32, 32314, 30, 23, 25],
                [14, 32, 34, 42, 56,452],
                [25, 54, 1231, 524, 54, 245]    
            ],
            path: [2, 6, 12, 20, 30, 42, 56],
            formula: "n(n+1) (n start from 1)"
        },

        
    ];
    
    function generateMap() {
        location.reload();
    }


</script>
<div class="container">
    {#if playerPosData.moveCounts == map[choosenMap].path.length}
    <h1>You Win</h1>
    <h2> Click Generate Map to play other Map</h2>
    {/if}
    <button on:click={generateMap}>Generate Map</button>
    <h1>Formula: <span>{map[choosenMap].formula}</span></h1>

    <div class="grid">
        {#each map[choosenMap].grid as row, i}
            {#each row as col, j}
                <Cell data={{
                    path: map[choosenMap].path,
                    row: i,
                    col: j,
                    number: col
                }}/>
            {/each}
        {/each}
    </div>
    <div style="display:grid; place-items:center;">
        <h2>Number Sequence:</h2>
        <ul>
            {#each {length: playerPosData.moveCounts} as move, i}
                <li>{map[choosenMap].path[i]}</li>
            {/each}
        </ul>
    </div>
</div>
<style>
    button {
        border: none;
        background: none;
        color: yellow;
        filter: drop-shadow(0 0 7px yellow);
    }
    * {
        font-size: 2rem;
        color: white;
    }
    span {
        color: rgb(0, 255, 242);
    }
    .grid {
        width: 600px;
        display: grid;
        grid-template-columns: repeat(6, auto);
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
    }
    li {
        padding: 0;
        margin: 0.5rem;
        color: aqua;
        filter: drop-shadow(0 0 7px rgb(0, 255, 242));
    }
</style>