import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Sep2023Page = () => {
  return (
    <MonthlyLayout>
      <h1>Vad är en BPF? - Månadens problem, September 2023</h1>
      <p>Author: Martin Wennberg</p>
      <p>haha documentation go brrrrrrrrr. <a href="/monthly/sep-2023/runner.c">Kod här</a> och <a href="/monthly/sep-2023/bpf_loader">binär här</a>! Lycka till!</p>
      <p><code>nc 35.228.72.74 2309</code></p>
    </MonthlyLayout>
  )
}

export default Sep2023Page
