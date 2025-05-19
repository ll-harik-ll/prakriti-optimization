import { useLocation } from 'react-router-dom';
import sendReport from '../../services/report-service';

const ConfirmPage = () => {
    const location = useLocation();
    const report = location.state?.report || [];

    // Moved sendReport function to services/ so and simply called it in button onClick
    // with report passed as argument. If it doesn't work, maybe add a wrapper function to
    // call sendReport within and then call wrapper in button onClick
    
    return (
        <div>
            <h2>Reay to Submit ?</h2>
            <button onClick={sendReport(report)}>Save & Submit</button>
        </div>
    );
}

export default ConfirmPage;