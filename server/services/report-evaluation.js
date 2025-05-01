const EvaluateReport = (responses) => {
    var v_count=0, p_count=0, k_count=0;
    responses.forEach(response => {
        switch (response.selected) {
            case "v":
                ++v_count;
                break;
            
            case "p":
                ++p_count;
                break;
            
            case "k":
                ++k_count;
                break;
            default:
                console.error(`Invalid Selection`);
                break;
        }
    });

    const v_percent = (v_count/34)*100;
    const p_percent = (p_count/34)*100;
    const k_percent = (k_count/34)*100;

    var prkrT=``;
    const max = Math.max(v_percent, p_percent, k_percent);

    if (v_percent == max ) {
        if (prkrT)
            prkrT += `-`;
        prkrT += `VADHA`;
    }
    if (p_percent == max ) {
        if (prkrT)
            prkrT += `-`;
        prkrT += `PITHA`;
    }
    if (k_percent == max ) {
        if (prkrT)
            prkrT += `-`;
        prkrT += `KAPHA`;
    }

    return prkrT;
};

export default EvaluateReport;
