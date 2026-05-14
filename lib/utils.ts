export const dataGridClassNames =
	"border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => ({
	"&.MuiDataGrid-root": {
		border: "none",
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
		color: isDarkMode ? "#e5e7eb" : "#111827",
	},

	"& .MuiDataGrid-main": {
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
	},

	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
		color: isDarkMode ? "#e5e7eb" : "#111827",
		borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
	},

	"& .MuiDataGrid-columnHeader": {
		backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
	},

	"& .MuiDataGrid-cell": {
		borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
	},

	"& .MuiDataGrid-row": {
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
	},

	"& .MuiDataGrid-footerContainer": {
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
		borderTop: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
	},

	"& .MuiTablePagination-root": {
		color: isDarkMode ? "#a3a3a3" : "#374151",
	},

	"& .MuiSvgIcon-root": {
		color: isDarkMode ? "#a3a3a3" : "#6b7280",
	},

	"& .MuiDataGrid-virtualScroller": {
		backgroundColor: isDarkMode ? "#101214" : "#ffffff",
	},

	"& .MuiDataGrid-withBorderColor": {
		borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
	},
});
