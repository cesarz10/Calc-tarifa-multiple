function Person() {
    const InstantDebt = 10;
    const TotalDebt = 37;

    var ret_txt = `I have to pay $${InstantDebt} to X person\nI owe $${TotalDebt} in total`
    return (
        <div>
            <h2>{ret_txt}</h2>
        </div>
    );
}

export default Person;