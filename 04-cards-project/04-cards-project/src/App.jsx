import Card from './components/Card'

const App = () => {
  
  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      companyName: "Google",
      datePosted: "4 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Bengaluru, Karnataka, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Gurugram, Haryana, IN",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
      companyName: "Amazon",
      datePosted: "5 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$42/hr",
      location: "Hyderabad, Telangana, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Mumbai, Maharashtra, IN",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Mumbai, Maharashtra, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Noida, Uttar Pradesh, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      companyName: "NVIDIA",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Pune, Maharashtra, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$32/hr",
      location: "Noida, Uttar Pradesh, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
      companyName: "Salesforce",
      datePosted: "4 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$40/hr",
      location: "Hyderabad, Telangana, IN",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hr",
      location: "Bengaluru, Karnataka, IN",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx){

        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} date={elem.datePosted} 
          tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}
          brandLogo={elem.brandLogo} />
        </div>

     })}
    </div>
  )
}

export default App
