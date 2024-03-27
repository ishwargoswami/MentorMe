import Search from './Search';
import initialDetails from '../searchdata';

const Expert = () => {
  return (
    <div className="tc bg-#FAFAFA ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
  );
}

export default Expert;


