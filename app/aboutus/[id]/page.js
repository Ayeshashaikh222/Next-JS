

function TeamMembersDetails({ params }) {


    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' },
    ];

    const member = details.find((member) => member.id.toString() === params.id);
    console.log(member);
    if (!member) {
        return <div>Developer doesn't exist</div>;
    }

    return (
        <div>
            <h1>{member.name}</h1>
            <p>{member.role}</p>
        </div>
    );


};

export default TeamMembersDetails;