import Link from 'next/link'

export default function TeamItem({ item }) {
    return (
        <>
            <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-item">
                    <div className="team-thumb">
                        <Link href={`/team/${item.id}`}><img src={`/assets/img/team/${item.img}`} alt="" /></Link>
                    </div>
                    <div className="team-content">
                        <h3 className="title"><Link href={`/team/${item.id}`}>{item.title}</Link></h3>
                        <span>Architect</span>
                    </div>
                </div>
            </div>
        </>
    )
}
