import { render, screen } from "@testing-library/react";
import CoinTableHeader from "../CoinTableHeader";
import { Table, TableContainer, TableHead } from "@mui/material";

describe("CoinTableHeader", () => {
  it("renders the table header with correct column names", () => {
    render(
      <TableContainer>
        <Table>
          <TableHead>
            <CoinTableHeader />
          </TableHead>
        </Table>
      </TableContainer>
    );

    expect(screen.getByText("Asset")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Price Change 24h")).toBeInTheDocument();
  });

  it("renders the correct number of table cells", () => {
    render(
      <TableContainer>
        <Table>
          <TableHead>
            <CoinTableHeader />
          </TableHead>
        </Table>
      </TableContainer>
    );

    const cells = screen.getAllByRole("columnheader");
    expect(cells).toHaveLength(3);
  });
});
