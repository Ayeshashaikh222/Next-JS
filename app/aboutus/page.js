import Link from "next/link";


function AboutPage() {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' },
    ];

    return (
        <>
            <div>About Page</div>
            <ul>
                {details.map((member) => (
                    <li>
                        <Link href={`/aboutus/${member.id}`}>
                            {member.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </>

    )
}

export default AboutPage;