---
id: commands
title: Simulation Command Reference
sidebar_label: Simulation Command Reference
sidebar_position: 1
description: Reference commands for simulating GTS Ethernet Hard IP design examples.
tags: [ethernet, simulation, reference]
---

# Simulation Command Reference

Use the following commands to run GTS Ethernet Hard IP design example simulations.

## Working Directory

Before running a simulation, navigate to the following directory:

`<design_example_dir>/example_testbench`

Replace `<design_example_dir>` with the location of your generated design example.

## Simulator Commands

| Simulator | Command |
| --- | --- |
| Synopsys VCS MX | `sh run_vcsmx.sh` |
| Questa (GUI mode) | `vsim -do run_vsim.do` |
| Questa (Command-line mode) | `vsim -c -do run_vsim.do` |
| Xcelium | `sh run_xcelium.sh` |
| Aldec Riviera-PRO | `vsim -c -do run_rivierasim.do` |

:::note
Simulator support and additional setup requirements may vary depending on the selected IP configuration.
:::

## Successful Simulation

A successful simulation ends with the following message:

`Testbench complete`

:::tip
After completing the simulation, review the packet counters and error statistics.
:::

## Related Topics

- [Simulate Ethernet IP](../guides/writing-in-markdown.md)
- [Verify Simulation Results](../guides/custom-html-and-mdx.mdx)
