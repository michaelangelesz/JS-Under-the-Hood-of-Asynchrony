function exampleThree() {

    function one() {
        doWork()
    }

    //by adjusting the numbers manually, we can space the functions out evenly:
    async function two() {
        await sleep(500)
        doWork()
        await sleep(1500)
        doWork()
    }

    async function three() {
        await sleep(1500)
        doWork()
        await sleep(1500)
        doWork()
    }

    one()
    return [two(), three()]
}