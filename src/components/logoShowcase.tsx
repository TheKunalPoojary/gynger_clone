import React from 'react'
import Image from 'next/image'

const logoData = [
  { url: "/company/68093db47d156386de8b4117_aws.svg" },
  { url: "/company/68093dc872e8e2e140204e43_adobe.svg" },
  { url: "/company/68093dd713547870ba46ca01_amplitude.svg" },
  { url: "/company/68093df4b3c47947c8a929d7_braze.svg" },
  { url: "/company/68093e022eaa2cacfeb74e54_cisco.svg" },
  { url: "/company/68093e0f0dc652cde819b171_crowdstrike.svg" },
  { url: "/company/68093e19fbe4c43c6a7f4fe9_datadog.svg" },
  { url: "/company/68093e28a05dbe4d493778be_dell.svg" },
  { url: "/company/68093e5da05dbe4d4937a298_google-cloud.svg" },
  { url: "/company/68093e71a67811ee13ea9c59_hubspot.svg" },
  { url: "/company/68093e7c33f7e553359f3e62_lambda.svg" },
  { url: "/company/68093e86c47a0b9782c10dd6_okta.svg" },
  { url: "/company/68093e93965dc23bbc74c608_oracle.svg" },
  { url: "/company/68093ea4a05dbe4d4937d34d_paloalto.svg" },
  { url: "/company/68093ec00ce4a2ad9bc0b94a_salesforce.svg" },
  { url: "/company/68093ecb0c875b6901d006d8_snowflake.svg" },
  { url: "/company/68093ed7192ffc58f753e8ea_tipalti.svg" },
  { url: "/company/68093ee30fc9b0d58e7e39ce_vmware.svg" },
  { url: "/company/68093eee13547870ba47995b_wunderkind.svg" },
  { url: "/company/68093efac47a0b9782c165a4_zoominfo.svg" },
  { url: "/company/680bc458cd332b3f455fe319_doit.svg" },
  { url: "/company/680bc475b8840aa3a1327c82_cdw.svg" },
]

const LogoShowcase = () => {
  return (
    <section className='relative py-10 overflow-hidden flex'>
      <div className='flex gap-4 animate-infinite-scroll' >
      {[...logoData, ...logoData].map((logo , index) => (
        <Image key={index} src={logo.url} alt={`Company logo ${index + 1}`} width={1000} height={1000} className='h-12 mr-12'/>
      ))}
      </div>
    </section>
  )
}

export default LogoShowcase
